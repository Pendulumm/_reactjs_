import { NavLink, useRoutes } from "react-router-dom"

import routes from "./routes";
import Header from "./components/Header";

function App() {
  function getClassName({ isActive }) {
    return isActive ? 'list-group-item active_orange' : 'list-group-item'
  }

  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes);
  // console.log('element:', element);

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={getClassName} to="/about">About</NavLink>
            <NavLink className={getClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {
                element
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
