import './style.css'

function Navbar() {
    return (
        <>

            <nav class="navbar">
                <div className='nav-links-container'>

                    <button
                        className='nav-links'
                        type='button'
                        onClick={() => window.location.href = '/'}>

                        Início
                    </button>

                    <button
                        className='nav-links'
                        type='button'
                        onClick={() => window.location.href = '/login'}>

                        Login
                    </button>

                    <button
                        className='nav-links'
                        type='button'
                        onClick={() => window.location.href = '/catalogos'}>

                        Catálogos
                    </button>

                    <button
                        className='nav-links'
                        type='button'
                        onClick={() => window.location.href = '/produtos'}>

                        Produtos
                    </button>

                    <button
                        className='nav-links'
                        type='button'
                        onClick={() => window.location.href = '/sobre'}>

                        Sobre
                    </button>

                    <button
                        className='nav-links'
                        type='button'
                        onClick={() => window.location.href = '/contato'}>

                        Contato
                    </button>

                </div>

            </nav>


        </>
    )
}
export default Navbar