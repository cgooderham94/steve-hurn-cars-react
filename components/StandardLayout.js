import Navigation from './Navigation';

const StandardLayout = props => {
    return (
        <div className="StandardLayout">
            <Navigation />

            <main className="Content">
                { props.children }
            </main>
        </div>
    );
}

export default StandardLayout;