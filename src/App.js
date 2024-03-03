import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SpecialDialDetails from "./components/SpecialDialDetails";
import SmallTalkDetails from "./components/SmallTalkDetails";
import InsideJokesDetails from "./components/InsideJokesDetails";
import Home from "./components/Home";
import Header from "./components/Header";
import Vision from "./components/Vision";
import SmallTalk from "./components/SmallTalk";
import SpecialDial from "./components/SpecialDial";
import InsideJokes from "./components/InsideJokes";

function App() {
	const AppLayout = () => (
		<div>
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
					element: <Vision />,
				},
				{
					path: "/special-dial",
					element: <SpecialDial />,
				},
				{
					path: "/small-talk",
					element: <SmallTalk />,
				},
				{
					path: "/inside-jokes",
					element: <InsideJokes />,
				},
			],
		},
	]);
	return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
