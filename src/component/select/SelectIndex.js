import AsyncSelect from 'react-select/async';

const MySelect = (props) => {

    const customStyles = {
        singleValue: base => ({
            ...base,
            color: "#b1b1b5"
        }),
        control: (base, state) => ({
            ...base,
            background: "#222840",
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            borderColor: state.isFocused ? "#6c50f3" : "#222840",
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                borderColor: state.isFocused ? "#6c50f3" : "#6c50f3"
            },
        }),
        menu: base => ({
            ...base,
            background: "#222840",
            
            borderRadius: 0,
            marginTop: 0
        }),
        menuList: base => ({
            ...base,
            padding: 0
        }),
        
    };

    const loadOptions = inputValue => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filter(inputValue));
            }, 1000);
        });
    };

    const filter = inputValue => props.loadData.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
        <>
            <AsyncSelect
                isDisabled={props.disabled}
                value={props.defaultValue}
                isClearable
                defaultOptions
                cacheOptions
                onChange={props.onChange}
                loadOptions={loadOptions}
                styles={customStyles}
            />
        </>
    )
}

export default MySelect