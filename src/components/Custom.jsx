import { CustomStyled } from "./Styled/Custom.styled"

const Custom = () => {
    return (
        <CustomStyled >
            <h1>I am Styled Ephesis</h1>
            <nav>
                <ul>
                    <li>
                        home
                        <span></span><span></span><span></span><span></span>
                    </li>
                    <li>
                        products
                        <span></span><span></span><span></span><span></span>
                    </li>
                    <li>
                        services
                        <span></span><span></span><span></span><span></span>
                    </li>
                    <li>
                        contact
                        <span></span><span></span><span></span><span></span>
                    </li>
                </ul>
            </nav>

        </CustomStyled>
    )
}

export default Custom
