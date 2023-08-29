import { Request, Response } from "express"
const express = require('express')
const router = express.Router()
import { UserController } from '../controllers/UserController'
import { sendSuccessMessage, sendErrorMessage } from '../common'

const controller = new UserController

router.get("/", async (req: Request, res: Response) => {
    try {
        const data = await controller.get()
        sendSuccessMessage(res, data, 'success')
    } catch (error: unknown) {
        sendErrorMessage(res, error)
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const data = await controller.create(req)
        sendSuccessMessage(res, data, 'success')
    } catch (error: unknown) {
        sendErrorMessage(res, error)
    }
})

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const data = await controller.update(req)
        sendSuccessMessage(res, data, 'success')
    } catch (error: unknown) {
        sendErrorMessage(res, error)
    }
})

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const data = await controller.delete(req)
        sendSuccessMessage(res, data, 'success')
    } catch (error: unknown) {
        sendErrorMessage(res, error)
    }
})

module.exports = router