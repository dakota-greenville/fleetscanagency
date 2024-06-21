import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.js'

import Contact_us from './pages/contact_us.js'
import About from './pages/about.js'
import PageNotFound from './pages/pagenotfound.js' 

const Root = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/">
				<Route index element={<App />} />
				<Route path="contact_us" element={<Contact_us/>} />
				<Route path="about" element={<About/>} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>
)

export default Root