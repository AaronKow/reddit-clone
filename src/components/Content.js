// Content of the Page (Consist the list of entry)

// Global Scope
import $global from '../$global';

// Components
import Grippy from './Grippy';
import Entries from './Entries';
import Sidebar from './Sidebar';
import Form from './Form';

const Content = () => {
    return `
        <!-- Sidebar on the left -->
        ${ Grippy }

        <div class="content">

            <!-- Center Content -->
            ${ $global.newSubmit ? Form.init() : Entries() }

            <!-- Sidebar on the right -->
            ${ Sidebar }

        </div>
    `;
}

export default Content;
