import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    const page = request.url.split('page=');
    const limit = 8;

    // Calculate the starting index based on the page and limit
    const startIndex = (page - 1) * limit;
    const spacexApiBaseUrl = 'https://api.spacexdata.com/v3';
    try {
        const response = await fetch(`${spacexApiBaseUrl}/capsules?offset=${startIndex}&limit=${limit}`);
        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching rockets:', error);
        return NextResponse.status(500).json({ error: 'Internal server error' });
    }
}