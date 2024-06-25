export default function Titulo(props) {
    return (
        <h1 className="text-center mt-4 mb-4" style={{ color: '#545454' }}>
            {props.texto}
        </h1>
    )
}