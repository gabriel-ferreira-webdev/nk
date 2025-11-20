import logo from '../assets/nk-logo-branco.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <a href="/#"><img className="block w-18 mb-3" src={logo} alt="" /></a>
                <p className="text-center text-sm text-gray-400">
                    &copy; 2024 NK Engenharia. All rights reserved.
                </p>
            </div>
        </footer>
    );
}