import { NextResponse } from "next/server";

export async function GET(request) {
    const spacexApiBaseUrl = 'https://api.spacexdata.com/v4';
    // const page = parseInt(req.query.page, 10) || 1;
    // const limit = parseInt(req.query.limit, 10) || 10;

    // // Calculate the starting index based on the page and limit
    // const startIndex = (page - 1) * limit;
    try {
        const response = await fetch(`${spacexApiBaseUrl}/rockets?offset=${2}&limit=${10}`);
        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching rockets:', error);
        return NextResponse.status(500).json({ error: 'Internal server error' });
    }
}