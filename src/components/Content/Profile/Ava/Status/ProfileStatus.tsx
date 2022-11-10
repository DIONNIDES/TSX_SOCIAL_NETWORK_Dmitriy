import React, {ChangeEvent, Component} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusType> {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    setStatus = (e: ChangeEvent<HTMLInputElement>) => this.setState(
        {
            status:e.currentTarget.value
        }
    )

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}><h3>{this.props.status || 'Set your status...'}</h3></span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.setStatus} value={this.state.status} onBlur={this.deactivateEditMode} autoFocus/>
                    </div>
                }
            </>
        );
    }
}
