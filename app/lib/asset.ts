export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const asset = (path: string) => {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${clean}`
}