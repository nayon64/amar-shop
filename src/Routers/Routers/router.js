import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import ProductCreate from "../../pages/ProductCreate/ProductCreate";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			},
			{
				path: "/productcreate",
				element:<ProductCreate></ProductCreate>
			}
		]
	}
])

export default router;