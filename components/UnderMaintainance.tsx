import React from 'react'

type Props = {}

function UnderMaintainance({ }: Props): React.FC<Props> {
    return (
        <>
            <div className="maintainance font-mono">
                <h1>We&apos;ll be back </h1>
                <hr />
                <p>Prizes ready! 🏆🎉 Stay tuned for more GDSC DCRUST fun. See you next time! 🚀</p>
            </div>
        </>
    )
}

export default UnderMaintainance