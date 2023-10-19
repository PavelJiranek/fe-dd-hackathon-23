export interface IWorkspace {
    id: string;
    name: string;
    parent_id: string | null;
    children: IWorkspace[];
}
