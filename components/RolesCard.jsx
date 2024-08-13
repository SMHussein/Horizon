import Heading from './Heading';

function RolesCard({ roles, title }) {
    return (
        <div className='flex flex-col gap-4 justify-items-center px-8 py-12 bg-primary-50 w-full'>
            <Heading type={3} classes='text-center bg-accent-50 font-normal capitalize py-2 mb-4'>
                {title}
            </Heading>
            <ul className='list-disc flex flex-col gap-4'>
                {roles.map((role) => (
                    <li key={role}>{role}</li>
                ))}
            </ul>
        </div>
    );
}

export default RolesCard;
