import React, { useEffect, useState } from "react";
import ArticleTable from "../../Components/ArticleTable/ArticleTable";
import { Article } from "../../helpers/declarations";
import AddArticleModal, {
  AddArticleDto,
} from "../../Components/AddArticleModal/AddArticleModal";
import SuccessDialog from "../../Components/SuccessDialog/SuccessDialog";
import ErrorDialog from "../../Components/ErrorDialog/ErrorDialog";
import TableSkeleton from "../../Components/TableSkeleton/TableSkeleton";
import { AllArticles, CreateArticle } from "../../Services/ArticleService";
import { showErrorModal, showSuccessModal } from "../../helpers/handlers";

type Props = {};

const StockPage = (props: Props) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetAllArticles = async () => {
      setLoading(true);
      const results = await AllArticles();
      setArticles(results);
      setLoading(false);
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
          showSuccessModal();
        } else {
          showErrorModal();
        }
      } catch (error) {
        showErrorModal();
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
        {isLoading ? (
          <TableSkeleton isLoading={isLoading}></TableSkeleton>
        ) : (
          <ArticleTable articles={articles}></ArticleTable>
        )}
      </div>
      <AddArticleModal
        isOpen={isModalOpen}
        onClose={CloseModal}
      ></AddArticleModal>
      {/* {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorDialog onClose={() => setShowError(false)} />} */}
    </>
  );
};

export default StockPage;
