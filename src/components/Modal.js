import React from "react";
import { Dialog, Paragraph, Portal } from "react-native-paper";

export default function Modal(props) {
    const { visible, setVisible, children } = props;
    const hideDialog = () => setVisible(false);
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Content>{children}</Dialog.Content>
            </Dialog>
        </Portal>
    );
}
