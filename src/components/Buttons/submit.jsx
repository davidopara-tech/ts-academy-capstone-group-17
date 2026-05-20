function SubmitButton({ children = '', disabled = false, className = '' }) {
  const classes = `btn btn-primary ${className}`.trim()

  return (
    <button type="submit" className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

export default SubmitButton