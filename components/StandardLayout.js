import Navigation from './Navigation';
import Footer from './Footer';

const StandardLayout = props => {
    return (
        <div className="StandardLayout">
            <Navigation />

            <main className="Content">
                { props.children }
            </main>

            <Footer />
        </div>
    );
}

export default StandardLayout;