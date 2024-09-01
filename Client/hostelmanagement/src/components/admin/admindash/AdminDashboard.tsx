
export default function AdminDashboard() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-muted">
        <div className="w-full max-w-lg p-6 bg-background shadow-lg rounded-xl">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Admin Avatar" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">Admin</p>
            </div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">Employee ID:</span> 12345
              </div>
              <div>
                <span className="font-medium">User ID:</span> johndoe123
              </div>
              <div>
                <span className="font-medium">Joined:</span> June 1, 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }