import id from "zod/v4/locales/id.cjs";

export const PostFeatured = [
  {id: 1, title: "le titre de post 1", except: "beatae voluptate corporis sed ut doloribus labore, nemo illo,beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 1",date: "2023-01-01", image: "https://picsum.photos/id/139/200/100"},
  {id: 2, title: "le titre de post 2", except: " beatae voluptate corporis sed ut doloribus labore, nemo illo,beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 2",date: "2023-01-02", image: "https://picsum.photos/id/158/200/100"},
  {id: 3, title: "le titre de post 3", except: " asperiores temporibus expedita, accusamus ipsum mollitia iusto animi,beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 3",date: "2023-01-03", image: "https://picsum.photos/id/337/200/100"},
  { id: 4, title: "le titre de post 4", except: " facilis unde fuga.beatae voluptate corporis sed ut doloribus labore, nemo illo",category: "Category 4",date: "2023-01-04", image: "https://picsum.photos/id/437/200/100"},
 
];

export const Categories = [
  { id: 1, name: "Tech",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-4 9 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path></svg>`, color: "bg-red-500" ,count: 10   },
  { id: 2, name: "Design",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-4 9 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path></svg>`, color: "bg-blue-500", count: 5   },
  { id: 3, name: "Creativity",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-4 9 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path></svg>`, color: "bg-green-500", count: 8   },
  { id: 4, name: "Innovation",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-4 9 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path></svg>`, color: "bg-yellow-500", count: 12   },
  { id: 5, name: "Programming",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-4 9 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path></svg>`, color: "bg-purple-500", count: 15   },
  { id: 6, name: "Lifestyle",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-4 9 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path></svg>`, color: "bg-pink-500", count: 7   },
]
