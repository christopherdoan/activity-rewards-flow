import { useState, useEffect } from "react"
import { useAuth } from "./context/AuthContext"
import { useImageExport } from "./hooks/useImageExport"
import { Button } from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./components/ui/card"

function App() {
    const { user, loading, login, logout } = useAuth()
    const { ref, exportImage, isExporting } = useImageExport()
    const [randomStat, setRandomStat] = useState(0)

    useEffect(() => {
        // Simulate fetching data
        setRandomStat(Math.floor(Math.random() * 100))
    }, [])

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            {!user ? (
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                        <CardDescription>Please login to continue.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button onClick={login} className="w-full">
                            Login
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Your Dashboard</h1>
                        <Button variant="outline" onClick={logout}>Logout</Button>
                    </div>

                    {/* This is the capture area */}
                    <div ref={ref} className="bg-white p-8 rounded-xl shadow-lg border w-[400px]">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                U
                            </div>
                            <div>
                                <h2 className="font-bold text-lg">User {user.id}</h2>
                                <p className="text-gray-500 text-sm">Monthly Recap</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-xs text-blue-600 font-bold uppercase">Distance</p>
                                <p className="text-2xl font-black">{randomStat + 120}km</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-xs text-blue-600 font-bold uppercase">Elevation</p>
                                <p className="text-2xl font-black">{randomStat * 10}m</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Button onClick={() => exportImage()} disabled={isExporting}>
                            {isExporting ? 'Exporting...' : 'Share / Download Image'}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
