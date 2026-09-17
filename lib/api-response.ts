import { NextResponse } from "next/server"

export function SuccessResponse<T>(
  data: T,
  message = "Success response!!",
  status = 200,
  meta?: Record<string, unknown>
) {
  return NextResponse.json(
    {
      result: data,
      message,
      ...(meta && { meta }),
    },
    { status }
  )
}

export function ErrorResponse(
  message = "Something went wrong!",
  status = 500,
  code?: string
) {
  return NextResponse.json(
    {
      result: [],
      message,
      ...(code && {
        error: { code },
      }),
    },
    { status }
  )
}
