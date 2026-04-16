"use client";

import Image from "next/image";
import { useLegalitasCards } from "@/hooks/useLgealitasCards";

const Legalitas = () => {
  const {
    currentPage,
    totalPages,
    currentCards,
    selectedCard,
    goToPage,
    goNextPage,
    goPrevPage,
    openCard,
    closeModal,
  } = useLegalitasCards();

  return (
    <div id="Legalitas" className="bg-white py-16 px-4 sm:px-6 lg:px-16">
      <h1 className="text-2xl font-semibold uppercase tracking-widest text-center mt-16 mb-6 text-[#3057B6]">
        Legalitas Perusahaan
      </h1>

      {/* Cards (3 per page) */}
      <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {currentCards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => openCard(card)}
            className="group focus:outline-none w-full max-w-sm sm:max-w-xs md:max-w-none"
          >
            <div className="w-full md:w-72 h-auto bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center border border-gray-200 transition transform group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-[#3057B6]">
              <Image
                src={card.image}
                alt={card.title}
                className="object-contain w-full h-full"
                width={256}
                height={160}
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-gray-700 group-hover:text-[#3057B6] transition">
              {card.title}
            </p>
          </button>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-row justify-center items-center gap-4 sm:gap-3 mt-10">
          <button
            type="button"
            onClick={goPrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm rounded-full border border-[#3057B6] text-[#3057B6] bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`w-9 h-9 text-sm rounded-full border transition ${
                  isActive
                    ? "bg-[#3057B6] text-white border-[#3057B6]"
                    : "bg-white text-gray-700 border-[#3057B6] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={goNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm rounded-full border border-[#3057B6] text-[#3057B6] bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* Modal gambar */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl p-3 sm:p-4 md:p-6 max-w-md sm:max-w-xl md:max-w-3xl w-full sm:w-[90%] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 text-xl leading-none"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center text-[#3057B6]">
              {selectedCard.title}
            </h2>

            <div className="relative w-full h-[50vh] sm:h-[60vh] max-h-100 sm:max-h-120">
              <Image
                src={selectedCard.image}
                alt={selectedCard.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Legalitas;