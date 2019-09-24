import React  from 'react';

const styles = {
    box: {
        border: '1px solid peachpuff',
        padding: 30,
        margin: 10
    },
    userName: {
        fontSize: '20px',
        color: 'purple',
        borderBottom: '1px solid pink'
    }
}
const UserOutput = (props) => {
    return(
        <div style={styles.box}>
            <p style={styles.userName}>{props.username}</p>
            <p>Front end web developer from Bangalore. React <span aria-label="heart" role="img">❤️</span></p>
        </div>
    )
}
export default UserOutput;