import React, { useEffect, useState } from "react";
import { Article } from "../../helpers/declarations";
import { AllArticles } from "../../Services/ArticleService";

interface ModalProps {
  isOpen: boolean;
  onClose: (data?: AddExitStockDto) => void; // A function type that takes no arguments and returns void
}
export interface AddExitStockDto {
  articleId: number;
  destination: string;
  quantite: number;
  date: Date;
}

const AddExitStockModal = (props: ModalProps) => {
  const [FormsValues, setFormsValues] = useState<AddExitStockDto>({
    date: new Date(),
    articleId: 0,
    destination: "",
    quantite: 0,
  });
  const [Articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const GetEntrys = async () => {
      const articlesReponse = await AllArticles();
      setArticles(articlesReponse);
    };
    GetEntrys();
  }, []);
  return (
    <div
      onClick={(e) => props.onClose()}
      className="fixed left-0 top-0 z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative  p-4  max-w-fit max-h-full"
      >
        <div className="relative  bg-white  rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-center  p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900  dark:text-white">
              Declarer New Exit Stock
            </h3>
            <button
              onClick={() => props.onClose()}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form
            onSubmit={(e) => props.onClose(FormsValues)}
            className="p-4 md:p-5"
          >
            <div className="grid gap-4 mb-4 grid-cols-12">
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="quantite"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantite"
                  id="quantite"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="999"
                  required
                  value={FormsValues?.quantite || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      quantite: Number(e.target.value),
                    }));
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="date"
                  required
                  value={
                    FormsValues?.date
                      ? new Date(FormsValues.date).toISOString().slice(0, 16)
                      : ""
                  }
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      date: new Date(e.target.value),
                    }));
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="destination"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="destination"
                  required
                  value={FormsValues?.destination}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      destination: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="article"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Article
                </label>
                <select
                  id="article"
                  value={FormsValues?.articleId || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      articleId: Number(e.target.value), // Convert the value to a number
                    }));
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="">Select article</option>
                  {Articles.map((article) => (
                    <option key={article.id} value={article.id}>
                      {article.nom}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Add new Exit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExitStockModal;
