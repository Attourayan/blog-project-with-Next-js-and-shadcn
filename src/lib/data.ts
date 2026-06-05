import { a } from "motion/react-client";
import id from "zod/v4/locales/id.cjs";

export const PostFeatured = [
  {id: 1, title: "le titre de post 1", except: "beatae voluptate corporis sed ut doloribus labore, nemo illo,beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 1",date: "2023-01-01", image: "https://picsum.photos/id/139/200/100"},
  {id: 2, title: "le titre de post 2", except: " beatae voluptate corporis sed ut doloribus labore, nemo illo,beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 2",date: "2023-01-02", image: "https://picsum.photos/id/158/200/100"},
  {id: 3, title: "le titre de post 3", except: " asperiores temporibus expedita, accusamus ipsum mollitia iusto animi,beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 3",date: "2023-01-03", image: "https://picsum.photos/id/337/200/100"},
  { id: 4, title: "le titre de post 4", except: " facilis unde fuga.beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 4",date: "2023-01-04", image: "https://picsum.photos/id/437/200/100"},
 
];

export const Categories = [
  { id: 1, name: "Tech",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>`, color: "bg-red-500" ,count: 10   },

  { id: 2, name: "Design",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-pinwheel-icon lucide-loader-pinwheel"><path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"/><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"/><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"/><circle cx="12" cy="12" r="10"/></svg>`, color: "bg-blue-500", count: 5   },

  { id: 3, name: "Creativity",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-kayak-icon lucide-kayak"><path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z"/><path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"/><path d="m6.707 6.707 10.586 10.586"/><path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"/></svg>`, color: "bg-green-500", count: 8   },

  { id: 4, name: "Innovation",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zodiac-aquarius-icon lucide-zodiac-aquarius"><path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10"/><path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002"/></svg>`, color: "bg-yellow-500", count: 12   },

  { id: 5, name: "Programming",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`, color: "bg-purple-500", count: 15   },

  { id: 6, name: "Lifestyle",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-heart-icon lucide-house-heart"><path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`, color: "bg-pink-500", count: 7   },
]


export const quotes=[
  {id:1,text:"Sentences with the word quotes-parts. Ceci est déloyal dans la mesure où le paiement des quotes-parts ne doit avoir lieu que ",author:"author 1"},
  { id:2,text:"Sentences with the word quotes-parts. Ceci est déloyal dans la mesure où le paiement des quotes-parts ne doit avoir lieu que  ",author:"author 2"},
  { id:3,text:"Sentences with the word quotes-parts. Ceci est déloyal dans la mesure où le paiement des quotes-parts ne doit avoir lieu que",author:"author 3"}
]