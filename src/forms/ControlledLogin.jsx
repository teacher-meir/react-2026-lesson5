import React, { useState, useId } from 'react';

export default function ControlledLogin() {
    const [username, setUsername] = useState('jon doe');
    const [password, setPassword] = useState();

    // קוד ייחודי למופע הנוכחי של הקומפוננטה
    const idGenerator = useId();

    // id נעדיף להימנע מיצירת
    // בתוך קומפוננטות
    // כי אם מביאים את הקומפוננטה כמה פעמים באותו עמוד
    // יש בעיה של איי-די כפול
    // לדוגמא
    // אם יש טבלה עם רשימת מוצרים
    // ועל כל שורה יש כפתור עריכה
    // שפותח טופס עריכה באותה שורה
    // יכול להיות שעורכים כמה מוצרים במקביל באותו זמן
    return (
        <form>
            <h1>Controlled Login</h1>

            {/* label - מה יש בתוך האינפוט */}
            {/* השלמות אוטומטיות מבצע לפי זה */}
            <div>
                <label htmlFor={'username' + idGenerator}>user name: </label>
                <input type="text" name='username' id={'username' + idGenerator}
                    autoComplete='off'
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)} />
            </div>
            <div>
                <label htmlFor={'pass' + idGenerator}>password: </label>
                <input type="password" name='password' id={'pass' + idGenerator}
                    autoComplete='off'
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)} />
            </div>
            <input type="checkbox" checked={true} />
            <button>OK</button>
        </form>
    )
}
