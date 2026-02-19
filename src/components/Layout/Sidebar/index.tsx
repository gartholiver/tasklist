
export default function Sidebar() {
    return (
        <aside className="bg-gray-200 p-4 w-64">
            <nav>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Tasks</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}