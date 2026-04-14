import { useMemo, useState, useCallback } from "react";
import cardsLegalitas from "@/components/sections/Legalitas/CardLegalitas";

export type LegalitasCard = (typeof cardsLegalitas)[number];

export const ITEMS_PER_PAGE = 3 as const;

export const useLegalitasCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState<LegalitasCard | null>(null);

  const totalPages = useMemo(
    () => Math.ceil(cardsLegalitas.length / ITEMS_PER_PAGE),
    []
  );

  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return cardsLegalitas.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
    },
    [totalPages]
  );

  const openCard = useCallback((card: LegalitasCard) => {
    setSelectedCard(card);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedCard(null);
  }, []);

  const goNextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const goPrevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  return {
    currentPage,
    totalPages,
    currentCards,
    selectedCard,
    goToPage,
    goNextPage,
    goPrevPage,
    openCard,
    closeModal,
  };
};