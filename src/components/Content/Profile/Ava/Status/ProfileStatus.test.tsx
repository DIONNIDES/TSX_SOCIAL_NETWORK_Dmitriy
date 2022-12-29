import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus component', ()=>{
    test('status from props should be in the state', ()=>{
        const component = create(<ProfileStatus status={'IT-INCUBATOR'} updateUserStatus={()=>{}}/>);
        const instance = component.getInstance();
        expect( instance?.props.status).toBe('IT-INCUBATOR');
    });
    test('after creation <span> with correct status should be displayed', ()=>{
        const component = create(<ProfileStatus status={'IT-INCUBATOR'} updateUserStatus={()=>{}}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test('after creation <span> should contains correct status', ()=>{
        const component = create(<ProfileStatus status={'IT-INCUBATOR'} updateUserStatus={()=>{}}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe('IT-INCUBATOR');
    });
    test('after creation <input>  should`nt be displayed', ()=>{
        const component = create(<ProfileStatus status={'IT-INCUBATOR'} updateUserStatus={()=>{}}/>);
        const root = component.root;
                expect(()=>{
            let input = root.findByType("input");
        }).toThrow();
    });
})