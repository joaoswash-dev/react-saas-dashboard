import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Header />
                <main style={{ padding: 24 }}>
                    <Dashboard />
                </main>
            </div>
        </div>
    );
}

export default App;
