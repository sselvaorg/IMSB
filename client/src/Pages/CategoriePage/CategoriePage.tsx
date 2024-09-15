import React, { useEffect, useState } from "react";
import CategorieTable from "../../Components/CategoryTable/CategorieTable";
import { Categorie } from "../../helpers/declarations";

import AddCategoryModal, {
  AddCategorieDto,
} from "../../Components/AddCategoryModal/AddCategoryModal";
import SuccessDialog from "../../Components/SuccessDialog/SuccessDialog";
import ErrorDialog from "../../Components/ErrorDialog/ErrorDialog";
import TableSkeleton from "../../Components/TableSkeleton/TableSkeleton";
import { AllCategories, CreateCategory } from "../../Services/CategorieService";
import { showErrorModal, showSuccessModal } from "../../helpers/handlers";

type Props = {};

const CategoriePage = (props: Props) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const GetAllCategories = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const results = await AllCategories();
        setCategories(results);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };
    GetAllCategories();
  }, []);
  const CloseModal = async (addCategorieDto?: AddCategorieDto) => {
    setModalOpen(false);
    if (addCategorieDto) {
      console.log(addCategorieDto);
      try {
        const reponse = await CreateCategory(addCategorieDto);
        if (reponse) {
          setCategories([...categories, reponse]);
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
    <div>
      <div>
        <div className="pt-36">
          <div className="flex justify-end py-4 container mx-auto">
            <button
              onClick={(e) => setModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 font-medium rounded"
            >
              Ajouter Categorie
            </button>
          </div>
          {isLoading ? (
            <TableSkeleton isLoading={isLoading}></TableSkeleton>
          ) : (
            <CategorieTable categories={categories}></CategorieTable>
          )}
        </div>
      </div>
      {isModalOpen && (
        <AddCategoryModal
          isOpen={isModalOpen}
          onClose={CloseModal}
        ></AddCategoryModal>
      )}
      {/* {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorDialog onClose={() => setShowError(false)} />} */}
    </div>
  );
};

export default CategoriePage;
