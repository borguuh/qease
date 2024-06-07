import { ClipLoader } from "react-spinners"

type GoldenButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  loading?: boolean
}
const GoldenButton = ({ children, onClick, className, disabled, type, loading }: GoldenButtonProps) => {
  return (
    <button className={"bg-highlight inline-flex px-7 py-2 text-black rounded-full font-semibold items-center justify-center shake " + (className ?? "")}
      disabled={disabled || loading} onClick={onClick} type={type}>
      {children ?? "Click Me"}
      {loading && <span className="ml-2 flex">
        <ClipLoader color="white" size={16} />
      </span>}
    </button>
  )
}
export default GoldenButton