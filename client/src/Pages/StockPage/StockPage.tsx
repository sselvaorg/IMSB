import React, { useEffect, useState } from "react";
import ArticleTable from "../../Components/ArticleTable/ArticleTable";
import { AllArticles, CreateArticle } from "../../api/api";
import { Article } from "../../helpers/declarations";
import AddArticleModal, {
  AddArticleDto,
} from "../../Components/AddArticleModal/AddArticleModal";
import SuccessDialog from "../../Components/SuccessDialog/SuccessDialog";
import ErrorDialog from "../../Components/ErrorDialog/ErrorDialog";

type Props = {};

const StockPage = (props: Props) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const GetAllArticles = async () => {
      const results = await AllArticles();
      setArticles(results);
    };
    GetAllArticles();
  }, []);
  const CloseModal = async (addArticleDto?: AddArticleDto) => {
    setModalOpen(false);
    if (addArticleDto) {
      console.log(addArticleDto);
      try {
        const reponse = await CreateArticle(addArticleDto);
        if (reponse) {
          setArticles([...articles, reponse]);
          setShowSuccess(true);
        } else {
          setShowError(true);
        }
      } catch (error) {
        setShowError(true);
      }
    } else {
    }
  };
  return (
    <>
      <div className="pt-36">
        <div className="flex justify-end py-4 container mx-auto">
          <button
            onClick={(e) => {
              setModalOpen(true);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 font-medium rounded"
          >
            Ajouter Article
          </button>
        </div>
        <ArticleTable articles={articles}></ArticleTable>
      </div>
      <AddArticleModal
        isOpen={isModalOpen}
        onClose={CloseModal}
      ></AddArticleModal>
      {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorDialog onClose={() => setShowError(false)} />}
    </>
  );
};

export default StockPage;
