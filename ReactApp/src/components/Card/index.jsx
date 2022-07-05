import './styles.css';

export function Card(Props) {
    return (
        <div className="card">
            <strong> {Props.name}</strong>
            <small> {Props.time}</small>
        </div>
    )
}