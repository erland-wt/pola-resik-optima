type MenuLayanan = {
    id: string;
    bg: string;
    title: string;
    desc: string;
}

const cardsLayanan: MenuLayanan[] = [
    {
        id: "1",
        bg: "/images/office.jpg",
        title: "General Cleaning",
        desc: "Jasa kebersihan rutin dan mendalam untuk berbagai jenis area.",
    },
    {
        id: "2",
        bg: "/images/garden.jpg",
        title: "Landscape & Gardening",
        desc: "Perawatan taman dan area hijau agar tetap asri dan tertata.",
    },
    {
        id: "3",
        bg: "/images/gedung2.jpg",
        title: "High-Rise Glass Cleaning",
        desc: "Pembersihan kaca gedung tinggi dengan standar keamanan (K3) yang ketat.",
    },
    {
        id: "4",
        bg: "/images/sofa.jpg",
        title: "Upholstery Care",
        desc: "Cuci sofa, kursi kantor, dan karpet menggunakan metode yang menjaga serat kain.",
    },
    {
        id: "5",
        bg: "/images/floor.jpg",
        title: "Floor Specialist",
        desc: "Perawatan berbagai jenis lantai (keramik, vinyl, dll) hingga Kristalisasi Marmer dan Granit untuk mengembalikan kilau alaminya.",
    },
    {
        id: "6",
        bg: "/images/pest-control.jpg",
        title: "Pest Control",
        desc: "Pengendalian hama profesional untuk memastikan ruangan bebas dari gangguan serangga dan tikus.",
    },
];

export default cardsLayanan;