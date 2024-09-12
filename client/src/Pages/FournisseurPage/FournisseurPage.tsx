import React, { useEffect, useState } from "react";
import FournisseurTable from "../../Components/FournisseurTable/FournisseurTable";
import { Fournisseur } from "../../helpers/declarations";
import { AllFournisseurs, CreateFournisseur } from "../../api/api";
import SuccessDialog from "../../Components/SuccessDialog/SuccessDialog";
import ErrorDialog from "../../Components/ErrorDialog/ErrorDialog";
import AddFournisseurModal, {
  AddFournisseurDto,
} from "../../Components/AddFournisseurModal/AddFournisseurModal";
import TableSkeleton from "../../Components/TableSkeleton/TableSkeleton";

type Props = {};

const FournisseurPage = (props: Props) => {
  const [fournisseurs, setFournisseurs] = useState<Fournisseur[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  const CloseModal = async (addFournisseurDto?: AddFournisseurDto) => {
    setModalOpen(false);
    if (addFournisseurDto) {
      console.log(addFournisseurDto);
      try {
        const reponse = await CreateFournisseur(addFournisseurDto);
        if (reponse) {
          setFournisseurs([...fournisseurs, reponse]);
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
  useEffect(() => {
    const GetAllFournisseurs = async () => {
      setLoading(true);
      const results = await AllFournisseurs();
      setFournisseurs(results);
      setLoading(false);
    };
    GetAllFournisseurs();
  }, []);

  return (
    <div>
      <div className="pt-36">
        <div className="flex justify-end py-4 container mx-auto">
          <button
            onClick={(e) => {
              setModalOpen(true);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 font-medium rounded"
          >
            Declarer Fournisseur
          </button>
        </div>
        {isLoading ? (
          <TableSkeleton isLoading={isLoading}></TableSkeleton>
        ) : (
          <FournisseurTable fournisseurs={fournisseurs}></FournisseurTable>
        )}
      </div>
      {isModalOpen && (
        <AddFournisseurModal
          isOpen={isModalOpen}
          onClose={CloseModal}
        ></AddFournisseurModal>
      )}
      {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorDialog onClose={() => setShowError(false)} />}
    </div>
  );
};

export default FournisseurPage;
