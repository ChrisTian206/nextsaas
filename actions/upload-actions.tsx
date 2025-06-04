'use server'

import { extractPdfText } from "@/lib/langchain_func"

export async function generatePdfSummary(uploadResponse: [{
    serverData: {
        userId: string,
        file: {
            url: string,
            name: string,
            size: number,
            type: string,
        }
    }
}]) {
    if (!uploadResponse) {
        return {
            success: false,
            message: "File upload failed",
            data: null
        }
    }

    const {
        serverData: {
            userId,
            file: { url: pdfUrl, name: fileName },
        } } = uploadResponse[0]

    if (!pdfUrl) {
        return {
            success: false,
            message: "File upload failed",
            data: null
        }
    }

    try {
        const pdf = await extractPdfText(pdfUrl)
    } catch (error) {
        return {
            success: false,
            message: "Error generating summary",
            data: null
        }
    }
}