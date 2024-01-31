import { Home,ContactsPage,NotFoundPage, StraxovaniePage, TuriPage, ViziPage ,AviabiletPage} from "../pages";

export const routers = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/aviabilet",
    component: <AviabiletPage />,
  },
  {
    id: 3,
    path: "/tour",
    component: <TuriPage />,
  },
  {
    id: 4,
    path: "/visa",
    component: <ViziPage />,
  },
  {
    id: 5,
    path: "/straxovaniya",
    component: <StraxovaniePage />,
  },
  {
    id: 6,
    path: "/contact",
    component: <ContactsPage />,
  },
  {
    id: 7,
    path: "*",
    component: <NotFoundPage />,
  },
];
