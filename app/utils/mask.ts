function maskBalance(balance: string, visible: boolean) {
  if (visible) return balance

  return '****'
}

export {
  maskBalance
}
