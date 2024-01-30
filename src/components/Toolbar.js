const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props;

    const buttons = filters.map((item) => {
        const className = selected === item ? 'btn-active' : 'btn';

        return (
            <button
                className={className}
                type="button"
                key={item}
                onClick={() => onSelectFilter(item)}
            >
                {item}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
};

export default Toolbar;
