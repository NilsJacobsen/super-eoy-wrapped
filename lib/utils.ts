import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const gradientText = "bg-linear-to-r from-[#EDB6C8] via-[#CE6BD6] to-[#39A1DB] bg-clip-text text-transparent";