import React, { useEffect, useState } from "react";
import FluxTable from "../../Components/FluxTable/FluxTable";
import { EntryStock, IOStock, ExitStock } from "../../helpers/declarations";

import SuccessDialog from "../../Components/SuccessDialog/SuccessDialog";
import ErrorDialog from "../../Components/ErrorDialog/ErrorDialog";
import AddEntryStockModal, {
  AddEntryStockDto,
} from "../../Components/AddEntryStockModal/AddEntryStockModal";
import AddExitStockModal, {
  AddExitStockDto,
} from "../../Components/AddExitStockModal/AddExitStockModal";
import TableSkeleton from "../../Components/TableSkeleton/TableSkeleton";
import {
  CreateEntryStock,
  CreateExitStock,
  GetAllIOStock,
} from "../../Services/IOService";
import { showErrorModal, showSuccessModal } from "../../helpers/handlers";
import NavBar from "../../Components/NavBar/NavBar";
import SideNav from "../../Components/SideNav/SideNav";
import { useAuth } from "../../Contexts/useAuth";

type Props = {};

const EntryExitPage = (props: Props) => {
  const EntryToStock = (source: EntryStock): IOStock => {
    return {
      article: source.article.nom,
      date: source.date,
      id: source.id,
      type: "Entry",
      intervenant: source.Supplier.nom,
      quantite: source.quantite,
    };
  };
  const ExitToStock = (source: ExitStock): IOStock => {
    return {
      article: source.article.nom,
      date: source.date,
      id: source.id,
      type: "Exit",
      intervenant: source.destination,
      quantite: source.quantite,
    };
  };
  const [ioStock, setIoStock] = useState<IOStock[]>([]);
  const { isLoggedIn } = useAuth();
  const [isEntryModalOpen, setEntryModalOpen] = useState<boolean>(false);
  const [isExitModalOpen, setExitModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetAllIoOperations = async () => {
      setLoading(true);
      const response = await GetAllIOStock();
      setIoStock(response);
      setLoading(false);
    };

    GetAllIoOperations();
  }, []);
  const CloseEntry = async (data?: AddEntryStockDto) => {
    try {
      setEntryModalOpen(false);
      console.log("Data:", data); // Log data to verify its content
      if (data) {
        const reponse = await CreateEntryStock(data);

        console.log("Response:", reponse); // Log response to ensure it's valid

        if (reponse != null) {
          setIoStock(
            [...ioStock, EntryToStock(reponse)].sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
          );
          showSuccessModal();
        } else {
          throw new Error("Invalid response from CreateEntryStock"); // Handle unexpected response
        }
      } else {
      }
    } catch (error) {
      console.error("Error:", error); // Log error to debug
      setEntryModalOpen(false);
      showErrorModal();
    }
  };
  const CloseExit = async (data?: AddExitStockDto) => {
    try {
      setExitModalOpen(false);
      console.log("Data:", data); // Log data to verify its content
      if (data) {
        const reponse = await CreateExitStock(data);

        console.log("Response:", reponse); // Log response to ensure it's valid

        if (reponse != null) {
          setIoStock(
            [...ioStock, ExitToStock(reponse)].sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
          );
          showSuccessModal();
        } else {
          throw new Error("Invalid response from CreateExitStock"); // Handle unexpected response
        }
      } else {
      }
    } catch (error) {
      console.error("Error:", error); // Log error to debug
      setExitModalOpen(false);
      showErrorModal();
    }
  };
  return (
    <div className={`w-full m-0 ${isLoggedIn() ? "ps-64" : "p-0"}`}>
      {isLoggedIn() ? <SideNav></SideNav> : <></>}
      <NavBar></NavBar>
      <div>
        <div className="pt-36 px-2">
          <div className="flex justify-end gap-5 items-center py-4 container mx-auto">
            <button
              onClick={(e) => {
                setEntryModalOpen(true);
              }}
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 font-medium rounded"
            >
              Signaler Entry
            </button>
            <button
              onClick={(e) => {
                setExitModalOpen(true);
              }}
              className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 font-medium rounded"
            >
              Signaler Exit
            </button>
          </div>
          {isLoading ? (
            <TableSkeleton isLoading={isLoading}></TableSkeleton>
          ) : (
            <FluxTable iOStock={ioStock}></FluxTable>
          )}
        </div>
      </div>
      {/* {showSuccess && (
        <SuccessDialog onClose={() => setShowSuccess(false)}></SuccessDialog>
      )}
      {showError && (
        <ErrorDialog onClose={() => setShowError(false)}></ErrorDialog>
      )} */}
      {isEntryModalOpen && (
        <AddEntryStockModal
          isOpen={isEntryModalOpen}
          onClose={CloseEntry}
        ></AddEntryStockModal>
      )}
      {isExitModalOpen && (
        <AddExitStockModal
          isOpen={isExitModalOpen}
          onClose={CloseExit}
        ></AddExitStockModal>
      )}
    </div>
  );
};

export default EntryExitPage;
