import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VisionDetails from "./components/VisionDetails";
import SpecialDialDetails from "./components/SpecialDialDetails";
import SmallTalkDetails from "./components/SmallTalkDetails";
import InsideJokesDetails from "./components/InsideJokesDetails";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
	const AppLayout = () => (
		<div className="app-container h-screen">
			<Header />
			<Outlet />
		</div>
	);
	let router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/vision",
					element: <VisionDetails />,
				},
				{
					path: "/special-dial",
					element: <SpecialDialDetails />,
				},
				{
					path: "/small-talk",
					element: <SmallTalkDetails />,
				},
				{
					path: "/inside-jokes",
					element: <InsideJokesDetails />,
				},
			],
		},
	]);
	return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
