import React from 'react';

class App extends React.Component {

    state = {
        input: {
            FirstName: '',
            LastName: '',
            Address: '',
            email: '',
            phoneNo: ''
        },
        list: [],
        onEdit: false
    };

    getInput = e => {
        this.setState({ input: { ...this.state.input, [e.target.name]: e.target.value } });
    }

    AddDetails = () => {
        const newarr = [...this.state.list, this.state.input]
        this.setState({ list: newarr });
        this.setState({ input: { FirstName: '', LastName: '', Address: '', email: '', phoneNo: '' } });
        this.setState({onEdit: false})
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input className="form-control" onChange={this.getInput} type="text" name="FirstName" value={this.state.input.FirstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input className="form-control" onChange={this.getInput} type="text" name="LastName" value={this.state.input.LastName} />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input className="form-control" onChange={this.getInput} type="text" name="Address" value={this.state.input.Address} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" onChange={this.getInput} type="text" name="email" value={this.state.input.email} />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input className="form-control" onChange={this.getInput} type="text" name="phoneNo" value={this.state.input.phoneNo} />
                    </div>
                    <button className={this.state.onEdit ? "btn btn-primary" : "btn btn-secondary"} onClick={this.AddDetails}>submit</button>
                </form>
                <div className="mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td scope="row">{item.FirstName}</td>
                                        <td>{item.LastName}</td>
                                        <td>{item.Address}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNo}</td>
                                        <td><i onClick={() => {
                                            this.state.list.filter(arrayItem => {
                                                const newList = this.state.list.filter(item => {
                                                    return item !== arrayItem;
                                                })
                                                this.setState({ list: newList });
                                            })
                                        }} className="fa fa-trash-o" aria-hidden="true"></i></td>
                                        <td><i onClick={() => {
                                               this.state.list.filter(arrayItem => {
                                                const newList = this.state.list.filter(item => {
                                                    return item !== arrayItem;
                                                })
                                                this.setState({ list: newList });
                                            })
                                            this.setState({
                                                onEdit: true,
                                                input:
                                                {
                                                    FirstName: item.FirstName,
                                                    LastName: item.LastName,
                                                    Address: item.Address,
                                                    email: item.email,
                                                    phoneNo: item.phoneNo
                                                }
                                            });
                                            console.log(item)
                                        }}
                                            className="fa fa-edit"></i></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default App;