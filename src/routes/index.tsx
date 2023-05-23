import { FC } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";

import { URL_LIST } from "./urls";
import { getLoginedUserInfo } from "../services/reducers/userReducer";
import { useAppSelector } from "../services/hooks";

const AppRouter: FC = () => {
  const userInfo = useAppSelector(getLoginedUserInfo);
  console.log(userInfo);

  return (
    <Router>
      <Routes>
        {URL_LIST.map((urlItem, index) => (
          <Route
            key={index}
            path={urlItem.path}
            element={
              urlItem.layout ? (
                <MainLayout>
                  <urlItem.component />
                </MainLayout>
              ) : (
                <urlItem.component />
              )
            }
          />
        ))}
        <Route path="*" element={<p>Page not found. (404)</p>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
