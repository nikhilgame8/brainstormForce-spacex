import { NextResponse } from "next/server";

export async function GET(request) {
    const spacexApiBaseUrl = 'https://api.spacexdata.com/v3';
    try {
        const response = await fetch(`${spacexApiBaseUrl}/capsules?offset=2&limit=8`);
        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching rockets:', error);
        return NextResponse.status(500).json({ error: 'Internal server error' });
    }
}