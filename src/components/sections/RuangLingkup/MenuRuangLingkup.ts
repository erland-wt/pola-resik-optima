type cardsRuangLingkup = {
    id: string;
    bg: string;
    title: string;
    desc: string;
};

const cardsLingkup: cardsRuangLingkup[] = [
    {
        id: "1",
        bg: "/images/gedung2.jpg",
        title: "Corporate",
        desc: "Gedung Perkantoran & Pusat Perbelanjaan",
    },
    {
        id: "2",
        bg: "/images/hospital.jpg",
        title: "Healthcare",
        desc: "Rumah Sakit & Klinik (dengan standar higienitas medis).",
    },
    {
        id: "3",
        bg: "/images/factory.jpg",
        title: "Industrial",
        desc: "Pergudangan & Area Pabrik.",
    },
    {
        id: "4",
        bg: "/images/tamanKota.jpg",
        title: "Public Space",
        desc: "Tempat Ibadah & Taman Kota.",
    },
    {
        id: "5",
        bg: "/images/perumahan.jpg",
        title: "Residential",
        desc: "Perumahan & Apartemen.",
    },
];

export default cardsLingkup;