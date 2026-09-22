export function Child(props) {
    console.log(props.user)
    return (

        <h3> child-{props.user.name}-{props.user.state} </h3 >
    )
}