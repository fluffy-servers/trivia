import "dotenv/config"
import app from "./app"

const server = app.listen(process.env.PORT, () => {
    console.log("Server started on port %d", process.env.PORT)
})